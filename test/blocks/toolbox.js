/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const p5CategoryContents = [
  {
    kind: 'block',
    type: 'p5_background_color',
    inputs: {
      COLOR: {
        shadow: {
          type: 'colour_picker',
        },
      },
    },
  },
  {
    kind: 'block',
    type: 'colour_random',
  },
  {
    kind: 'block',
    type: 'draw_emoji',
  },
  {
    kind: 'block',
    type: 'simple_circle',
    inputs: {
      COLOR: {
        shadow: {
          type: 'colour_picker',
        },
      },
    },
  },
  {
    kind: 'label',
    text: 'Writing text',
  },
  {
    kind: 'block',
    type: 'write_text_with_shadow',
    inputs: {
      TEXT: {
        shadow: {
          type: 'text_only',
        },
      },
    },
  },
  {
    kind: 'block',
    type: 'write_text_without_shadow',
  },
  {
    kind: 'block',
    type: 'p5_ellipse',
    inputs: {
      X: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 150,
          },
        },
      },
      Y: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 150,
          },
        },
      },
      WIDTH: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 5,
          },
        },
      },
      HEIGHT: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 5,
          },
        },
      },
    },
  },
  {
    kind: 'block',
    type: 'p5_draw_grid',
    inputs: {
      X: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 4,
          },
        },
      },
      Y: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 4,
          },
        },
      },
    },
  },
  {
    kind: 'block',
    type: 'plant',
    inputs: {
      X: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 0,
          },
        },
      },
      Y: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 0,
          },
        },
      },
    },
  },
  {
    kind: 'block',
    type: 'harvest',
    inputs: {
      X: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 2,
          },
        },
      },
      Y: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 2,
          },
        },
      },
    },
  },
  {
    kind: 'block',
    type: 'water',
    inputs: {
      X: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 1,
          },
        },
      },
      Y: {
        shadow: {
          type: 'math_number',
          fields: {
            NUM: 1,
          },
        },
      },
    },
  },
];

export const toolbox = {
  'kind': 'flyoutToolbox',
  'contents': p5CategoryContents,
};