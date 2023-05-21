import {
  Col,
  FormGroup,
  Row,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import "./styles.css";
import { useState } from "react";
import useMediaQuery from "../../Utils/MediaQuery";
import { UserMessageType } from "../../Utils/Types";
import { postUserMessage } from "../../Utils/API";

const ContactMenu = () => {
  /**
   * This function handles the submission of a form.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Implement form submission logic
    e.preventDefault();

    if (!formBodySubmitted) {
      setFormBodySubmitted(true);
      setHeaderMessage("Now let's see how I can get in touch with you!");
      return;
    }

    console.log(userMessage);

    const postSuccess = await postUserMessage(userMessage);
    // function to send userMessage to Backend Laravel /api/contact

    if (!postSuccess) {
      console.log("error!");

      setHeaderMessage(
        "There seems to be an error sending the message. Please try again."
      );
      return;
    }

    setHeaderMessage("Your message was sent succesfully!");
    setUserMessage({ message: "", name: "", email: "" });
    setFormBodySubmitted(false);
    setFormSubmitted(true);
  };

  // function to update userMessage fields on form input
  const updateUserMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "message" | "name" | "email"
  ) => {
    setUserMessage({ ...userMessage, [field]: e.target.value });
    setFormSubmitted(false);
    if (formBodySubmitted === false)
      setHeaderMessage("Send me your message! I'd love to collaborate.");
  };

  const isBigScreen = useMediaQuery("(min-width: 992px)");

  const [formBodySubmitted, setFormBodySubmitted] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<UserMessageType>({
    message: "",
    name: "",
    email: "",
  });

  const [headerMessage, setHeaderMessage] = useState<string>(
    "Send me your message! I'd love to collaborate."
  );

  let headline: JSX.Element = (
    <h3 className="form-headline">{headerMessage}</h3>
  );

  if (formSubmitted)
    headline = (
      <h3 className="form-headline">Your message was successfully sent!</h3>
    );

  let buttonDisabled: boolean = false;

  if (userMessage.message.trim().length < 5) buttonDisabled = true;

  if (formBodySubmitted) {
    if (userMessage.name.trim() === "" || userMessage.email.trim() === "")
      buttonDisabled = true;
  }

  return (
    <>
      <Row className="contact-title-row">
        <Col xs="12">
          <h2>Let's get in touch!</h2>
        </Col>
      </Row>
      <Row className="contact-form-wrapper">
        <Form method="POST" onSubmit={handleSubmit}>
          <FormGroup>
            <Row>{headline}</Row>
            <Row>
              <Col xs="12" lg={formBodySubmitted ? "6" : "12"}>
                {!formBodySubmitted || isBigScreen ? (
                  <>
                    <Form.Control
                      id="contact-message"
                      name="contact-message"
                      className="contact-message"
                      as="textarea"
                      value={userMessage.message}
                      onChange={(e) => updateUserMessage(e, "message")}
                      style={{
                        fontSize:
                          !formBodySubmitted && isBigScreen ? "1.5rem" : "1rem",
                      }}
                    />
                  </>
                ) : null}
              </Col>

              <Col xs="12" lg="6">
                {formBodySubmitted ? (
                  <>
                    <FloatingLabel
                      className="contact-form-floating-label mb-3"
                      controlId="contact-person-name"
                      label="What's your name?"
                    >
                      <Form.Control
                        name="contact-person-name"
                        type="text"
                        placeholder="John Doe"
                        value={userMessage.name}
                        onChange={(e) => updateUserMessage(e, "name")}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      className="contact-form-floating-label mb-3"
                      controlId="contact-person-email"
                      label="What's your contact e-mail?"
                    >
                      <Form.Control
                        name="contact-person-email"
                        type="email"
                        placeholder="john.doe@mailer.domain"
                        value={userMessage.email}
                        onChange={(e) => updateUserMessage(e, "email")}
                      />
                    </FloatingLabel>
                  </>
                ) : null}
              </Col>
            </Row>
          </FormGroup>

          <Button
            type="submit"
            className="btn btn-dark d-flex w-50 mx-auto justify-content-center mt-5"
            disabled={buttonDisabled}
          >
            {!formBodySubmitted
              ? "Send message!"
              : "Submit message! For real, this time!"}
          </Button>

          {!isBigScreen && formBodySubmitted ? (
            <>
              <Button
                onClick={() => setFormBodySubmitted(false)}
                className="btn btn-secondary d-flex w-50 mx-auto justify-content-center mt-3"
              >
                Go back
              </Button>
            </>
          ) : null}
        </Form>
      </Row>
    </>
  );
};

export default ContactMenu;
