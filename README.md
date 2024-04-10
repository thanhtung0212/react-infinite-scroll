## Installation

1. Clone the repository: `git clone https://github.com/thanhtung0212/react-infinite-scroll`
2. Navigate into the directory: `cd react-infinite-scroll`
3. Install the dependencies: `yarn`
4. Start the application: `yarn dev`

## Infinite Scroll

This application also includes an infinite scroll feature. As you scroll to the end of the product list, the application will automatically fetch the next 20 products and append them to the list. This provides a seamless browsing experience, allowing you to explore our extensive product range without having to manually load more products.

# Search Component

This is a simple search component built with React. It includes a debounced search input that waits for the user to stop typing before it updates the state with the search term.

### How it works

The infinite scroll feature is implemented using an event listener that triggers when you scroll near the bottom of the page. When this happens, a function is called to fetch the next 20 products from the server. These products are then added to the state, which causes the product list to re-render with the new products.

### Usage

To use the infinite scroll feature, simply scroll down on the product list. New products will automatically load as you reach the end of the list.
