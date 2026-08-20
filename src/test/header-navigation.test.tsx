import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "@/components/blezex/Header";

function LocationProbe() {
  const location = useLocation();
  return <output data-testid="location">{location.pathname + location.hash}</output>;
}

function renderHeader() {
  return render(
    <MemoryRouter
      initialEntries={["/"]}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Header />
      <LocationProbe />
    </MemoryRouter>,
  );
}

describe("Header service navigation", () => {
  it("navigates desktop service menu items to their service pages", async () => {
    renderHeader();

    const servicesButton = screen.getByRole("button", { name: /services/i });
    fireEvent.mouseEnter(servicesButton.parentElement as HTMLElement);
    fireEvent.click(await screen.findByRole("menuitem", { name: "Web Development" }));

    expect(screen.getByTestId("location")).toHaveTextContent("/services/web-development");
  });

  it("navigates mobile service menu items to their service pages", async () => {
    renderHeader();

    fireEvent.click(screen.getByRole("button", { name: /open navigation menu/i }));
    const servicesButtons = screen.getAllByRole("button", { name: /services/i });
    fireEvent.click(servicesButtons[1]);
    fireEvent.click(await screen.findByRole("link", { name: "Mobile Apps" }));

    expect(screen.getByTestId("location")).toHaveTextContent("/services/mobile-app-development");
  });
});
