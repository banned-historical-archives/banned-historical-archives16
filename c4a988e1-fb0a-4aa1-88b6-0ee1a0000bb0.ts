export default {
  entity: {
    id: 'c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0',
    name: '衷心拥护华主席 彻底揭发“四人帮”',
    internal: false,
    type: 'img',
    official: false,
    author: '王楚滨',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0/7.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '衷心拥护华主席 彻底揭发“四人帮”',
        authors: [
          '王楚滨',
        ],
        page_start: 1,
        page_end: 7,
        dates: [
          {
            year: 1976,
            month: 12,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: 'c4a988e1-fb0a-4aa1-88b6-0ee1a0000bb0',
  resource_type: 'book',
  version: 2,
};