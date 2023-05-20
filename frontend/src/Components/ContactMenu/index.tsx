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

// create the UserMessageType
type UserMessageType = {
  message: string;
  name: string;
  email: string;
};

const ContactMenu = () => {
  /**
   * This function handles the submission of a form.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Implement form submission logic
    e.preventDefault();

    if (!formBodySubmitted) {
      setFormBodySubmitted(true);
      return;
    }

    console.log(userMessage);
  };

  // function to update userMessage fields on form input
  const updateUserMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "message" | "name" | "email"
  ) => {
    setUserMessage({ ...userMessage, [field]: e.target.value });
  };

  const isBigScreen = useMediaQuery("(min-width: 992px)");

  const [formBodySubmitted, setFormBodySubmitted] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<UserMessageType>({
    message: "",
    name: "",
    email: "",
  });

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
            <Row>
              <h3 className="form-headline">
                {!formBodySubmitted
                  ? "Send me your message! I'd love to collaborate."
                  : "Now let's see how I can reach out to you!"}
              </h3>
            </Row>
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
