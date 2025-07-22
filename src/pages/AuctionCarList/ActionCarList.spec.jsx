import { screen, waitFor, within } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";
import { render } from "../../tests/helpers";
import { AuctionCarList } from "./AuctionCarList";

describe("AuctionCarList", () => {
  it("renders correctly", () => {
    render(<AuctionCarList />);

    // Filter
    expect(
      screen.getByRole("combobox", { name: "Make filter" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Model filter" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Min bid filter")).toBeInTheDocument();
    expect(screen.getByRole("switch"));

    // Sort
    expect(
      screen.getByRole("combobox", { name: "Sort field" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Sort order" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Items per page:" })
    ).toBeInTheDocument();

    // Car list
    expect(screen.getAllByRole("article")).toHaveLength(10);

    // Pagination
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("sets a vehicle as favorite when user clicks on the favorite button", async () => {
    render(<AuctionCarList />);

    const vehicle = screen.getAllByRole("article")[0];
    const vehicleFavouriteButton = within(vehicle).getByRole("button", {
      name: "Toggle favourite",
    });

    await userEvent.click(vehicleFavouriteButton);

    expect(vehicleFavouriteButton).toHaveClass("text-yellow-500");
  });

  it("updates list when user selects a make", async () => {
    render(<AuctionCarList />);

    const makeSelect = screen.getByRole("combobox", { name: "Make filter" });

    await userEvent.selectOptions(makeSelect, "Toyota");

    const vehicles = screen.getAllByRole("article");

    vehicles.forEach((vehicle) => {
      expect(
        within(vehicle).getByText((content, element) =>
          content.includes("Toyota")
        )
      ).toBeInTheDocument();
    });
  });

  it("updates list when user selects a model", async () => {
    render(<AuctionCarList />);

    const modelSelect = screen.getByRole("combobox", { name: "Model filter" });

    await userEvent.selectOptions(modelSelect, "C-HR");

    const vehicles = screen.getAllByRole("article");

    vehicles.forEach((vehicle) => {
      expect(
        within(vehicle).getByText((content, element) =>
          content.includes("C-HR")
        )
      ).toBeInTheDocument();
    });
  });

  it("updates list when user inputs a startingBid", async () => {
    render(<AuctionCarList />);

    const startingBidInput = screen.getByLabelText("Min bid filter");

    await userEvent.type(startingBidInput, "16000");

    const vehicles = screen.getAllByRole("article");

    vehicles.forEach((vehicle) => {
      const bidElement = within(vehicle).getByLabelText("starting-bid");
      expect(Number(bidElement.textContent)).toBeGreaterThanOrEqual(16000);
    });
  });

  it("updates list when user selects the favourite filter", async () => {
    render(<AuctionCarList />);

    const favouriteSwitch = screen.getByRole("switch");

    expect(favouriteSwitch).not.toBeChecked();

    await userEvent.click(favouriteSwitch);

    await waitFor(() => {
      const vehicles = screen.queryAllByRole("article");
      expect(vehicles.length).toBeGreaterThan(0); // make sure the filter applied

      vehicles.forEach((vehicle) => {
        const favButton = within(vehicle).getByRole("button", {
          name: "Toggle favourite",
        });
        expect(favButton).not.toBeNull(); // ensure button exists
        expect(favButton).toHaveClass("text-yellow-500");
      });
    });
  });

  it("updates list when user changes the number of items per page", async () => {
    render(<AuctionCarList />);

    const itemsPerPageSelect = screen.getByRole("combobox", {
      name: "Items per page:",
    });

    await userEvent.selectOptions(itemsPerPageSelect, "5");

    await waitFor(() => {
      const vehicles = screen.getAllByRole("article");

      expect(vehicles.length).toBeLessThanOrEqual(5);
    });
  });
});
