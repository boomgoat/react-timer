import React from "react";
import { screen, render } from "@testing-library/react";
import { Button } from "..";

describe("button tests", () => {
  afterAll(() => jest.clearAllMocks());

  test("renders with correct label", () => {
    render(
      <Button
        clickEventHandler={() => {}}
        label="Test"
        dataTestId="test-button"
      />
    );
    const button = screen.getByTestId("test-button");
    expect(button.textContent).toBe("Test");
  });

  test("snapshot test", () => {
    const { asFragment } = render(
      <Button clickEventHandler={() => {}} label="Test" />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
