import { HttpClient } from "./index";

describe("utils:HttpClient", () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = new HttpClient();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("should be a class", () => {
    expect(typeof HttpClient).toEqual("function");
    expect(typeof httpClient).toEqual("object");
  });
});
