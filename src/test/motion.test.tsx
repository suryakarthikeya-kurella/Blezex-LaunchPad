import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Reveal from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import Magnetic from "@/components/motion/Magnetic";
import SketchPath from "@/components/motion/SketchPath";
import Hero from "@/components/blezex/Hero";

describe("motion kit", () => {
  it("Reveal renders children", () => {
    render(<Reveal><p>hello</p></Reveal>);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
  it("SplitText exposes full text to assistive tech", () => {
    render(<SplitText text="Build. Automate. Scale." as="h1" />);
    expect(screen.getByRole("heading", { name: "Build. Automate. Scale." })).toBeInTheDocument();
  });
  it("SplitText keeps real spaces between words in textContent", () => {
    render(<SplitText text="Build. Automate. Scale." as="h1" />);
    expect(screen.getByRole("heading").textContent).toBe("Build. Automate. Scale.");
  });
  it("Hero h1 textContent reads the full phrase", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Transforming Businesses With BlezeX");
  });
  it("Magnetic renders children", () => {
    render(<Magnetic><button>go</button></Magnetic>);
    expect(screen.getByRole("button", { name: "go" })).toBeInTheDocument();
  });
  it("SketchPath renders a path", () => {
    const { container } = render(<svg><SketchPath d="M0 0 L10 10" /></svg>);
    expect(container.querySelector("path")).toBeTruthy();
  });
});
