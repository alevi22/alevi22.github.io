/** @jsxImportSource @emotion/react */

import { Property as CSSProperty } from "csstype";
import { screenSizes } from "../Global";
import { ChildrenProps } from "../Types";

/** A container for grid items */
const SimpleGrid = (props: SimpleGridProps) => {
  const {
    width,
    gap,
    rowGap,
    columnGap,
    numColumns,
    justifyRows,
    priority,
    children,
  } = props;

  const adjustedNumColumns = getNumColumns(numColumns);

  return (
    <div
      css={{
        width: width ?? "100%",
        display: "grid",
        gap: getGap(gap, rowGap, columnGap),

        // Determine the rows/columns for large screens
        gridTemplateColumns: getColumnTemplate("large", adjustedNumColumns),
        gridAutoRows: getAutoRows("large", adjustedNumColumns, justifyRows),

        // Determine the rows/columns for medium screens
        [`@media screen and (max-width: ${screenSizes.medium}px)`]: {
          gridTemplateColumns: getColumnTemplate("medium", adjustedNumColumns),
          gridAutoRows: getAutoRows("medium", adjustedNumColumns, justifyRows),
        },

        // Determine the rows/columns for small screens
        [`@media screen and (max-width: ${screenSizes.small}px)`]: {
          gridTemplateColumns: getColumnTemplate("small", adjustedNumColumns),
          gridAutoRows: getAutoRows("small", adjustedNumColumns, justifyRows),
        },

        "& div:first-of-type": {
          gridColumn: priority ? "1 / -1" : undefined,
        },
      }}
    >
      {children}
    </div>
  );
};

/**
 * Fills in a partial list of numbers of columns for different screen sizes
 *
 * @param numColumns the number of columns for some different screen sizes
 * @returns the number of columns for all different screen sizes
 */
const getNumColumns = (numColumns?: Partial<ColumnSettings>) => {
  const numColumnsCalculated: ColumnSettings = {
    small: numColumns?.small ?? 1,
    medium: 0,
    large: 0,
  };

  // If the number of columns for medium screens is specified, set it;
  // otherwise, assume it to be the same as for small screens
  numColumnsCalculated.medium =
    numColumns?.medium ?? numColumnsCalculated.small;

  // If the number of columns for large screens is specified, set it;
  // otherwise, assume it to be the same as for medium screens
  numColumnsCalculated.large = numColumns?.large ?? numColumnsCalculated.medium;

  return numColumnsCalculated;
};

/**
 * Constructs the string representing the CSS `grid-template-columns`
 * property for the specified screen size
 *
 * @param size the screen size for which to determine the column template string
 * @param numColumns the number of columns for differently sized screens
 * @returns the string representation of the CSS `grid-template-columns`
 *          property based on the given screen size and column counts
 */
const getColumnTemplate = (
  size: keyof ColumnSettings,
  numColumns: ColumnSettings
) => {
  return Array<string>(numColumns[size]).fill("1fr").join(" ");
};

/**
 * Constructs the string representing the CSS `grid-auto-rows` property
 * for the specified screen size
 *
 * @param size the screen size for which to determine the auto rows string
 * @param numColumns the number of columns for differently sized screens
 * @param justifyRows whether the rows of the grid should have equal heights
 * @returns the string representation of the CSS `grid-auto-rows` property
 *          based on the given screen size and column counts
 */
const getAutoRows = (
  size: keyof ColumnSettings,
  numColumns: ColumnSettings,
  justifyRows?: boolean
) => {
  if (justifyRows && numColumns[size] > 1) {
    return "1fr";
  } else {
    return "auto";
  }
};

/**
 * Constructs the string representing the CSS `gap` property
 *
 * @param gap the size of the gap (spacing) between rows and columns of the grid
 * @param rowGap the size of the gap (spacing) between rows of the grid
 * @param columnGap the size of the gap (spacing) between columns of the grid
 * @returns the string representation of the CSS `gap` property based on the given
 *          gap, row gap, and/or column gap values
 */
const getGap = (
  gap?: CSSProperty.Gap,
  rowGap?: CSSProperty.RowGap,
  columnGap?: CSSProperty.ColumnGap
) => {
  const defaultGap = "2.25rem";

  if (gap) {
    // If a gap value is given, use it
    return gap;
  } else {
    // If a gap value is not given, use the given row and column gap values
    // or their default values if they are not given
    return `${rowGap ?? defaultGap} ${columnGap ?? defaultGap}`;
  }
};

/** Props for the simple grid component */
type SimpleGridProps = Required<ChildrenProps> & {
  /** The number of columns the grid should show for differently sized screens */
  numColumns?: Partial<ColumnSettings>;

  /** Whether the grid should show the first item larger than all others */
  priority?: boolean;

  /** The width of the grid container */
  width?: CSSProperty.Width;

  /** The gap between rows and columns in the grid */
  gap?: CSSProperty.Gap;

  /** The gap between rows in the grid */
  rowGap?: CSSProperty.RowGap;

  /** The gap between columns in the grid */
  columnGap?: CSSProperty.ColumnGap;

  /** Whether to equalize the heights of all rows in the grid */
  justifyRows?: boolean;
};

/** Settings for the grid's columns' sizes */
type ColumnSettings = {
  large: number;
  medium: number;
  small: number;
};

export default SimpleGrid;