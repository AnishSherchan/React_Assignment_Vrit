// src/__test__/Task1.test.jsx
import { render, screen } from "@testing-library/react";
import Task2 from "../pages/Task2";
import { describe, it, expect, vi } from "vitest";

vi.mock("../api/useFetch", () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe("Task1 Component", () => {
  it("renders Loading component when loading", async () => {
    vi.mocked((await import("../api/useFetch")).default).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<Task2 />);

    expect(screen.getByText("Loading...")).not.toBeNull();
  });

  it("renders Error component when there is an error", async () => {
    vi.mocked((await import("../api/useFetch")).default).mockReturnValue({
      data: null,
      loading: false,
      error: "Something went wrong!",
    });

    render(<Task2 />);

    expect(screen.getByText("Something went wrong!")).not.toBeNull();
  });

  it("renders UserCard components when data is fetched successfully", async () => {
    const mockData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          city: "Gwenborough",
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      },
    ];

    vi.mocked((await import("../api/useFetch")).default).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(<Task2 />);

    expect(screen.getByText("Leanne Graham")).not.toBeNull();
    expect(screen.getByText("Bret")).not.toBeNull();
    expect(screen.getByText("Sincere@april.biz")).not.toBeNull();
    expect(screen.getByText("1-770-736-8031 x56442")).not.toBeNull();
    expect(screen.getByText("hildegard.org")).not.toBeNull();
  });
});
