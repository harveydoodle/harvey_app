// Alternative option is Header.HEIGHT from React Navigation for better
// responsiveness for orientation change. Note it will be deprecatd before beta is released.
const footerHeight = 64;

// Theme colors
const colors = {
  blue: '#3C7BDA',
  lightBlue: '#DFECFF',
  darkBlue: '#2068B0',
  headerDefaultGrey: '#F5F5F5',
  headerBorderBottomGrey: '#9E9E9E',
};

// StackNavigator styling
const navHeaderStyle = {
  backgroundColor: colors.blue,
  borderBottomWidth: 0.5,
  borderBottomColor: colors.headerBorderBottomGrey,
};

module.exports = {
  footerHeight,
  colors,
  navHeaderStyle,
};
