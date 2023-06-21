var API_PATH = "http://localhost:8000/api";

function generatePaginationNumbers(current_page: number, total_pages: number) {
  let res = [];
  res.push(1);
  for (let i = current_page - 2; i <= current_page + 2; ++i) {
    if (i >= 1 && i <= total_pages) res.push(i);
    else if (i < 1) res.push(total_pages + i - 1);
    else if (i > total_pages) res.push(i - total_pages + 1);
  }
  res.push(total_pages);
  return Array.from(
    new Set(res.sort((a, b) => a - b).filter((n) => n >= 1 && n <= total_pages))
  );
}
export { API_PATH, generatePaginationNumbers };
