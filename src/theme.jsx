export const theme = {
  colors: {
    text: '#2f4f4f',
    accent: 'red',
    active: 'orange',
    heading: '#000000',
    bgApp: '#79F8F8',
    bgButton: '#ffffff',
    bgButtonHover: 'orange',
    border: '#808080',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  shadows: {
    header: '0 5px 7px rgba(0, 0, 0, 0.4)',
    cardHover:
      '0 10px 20px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.15)',
  },
  transition: {
    transform: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    bgColor: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
    bold: '2px solid',
    dashed: '2px dashed',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};
