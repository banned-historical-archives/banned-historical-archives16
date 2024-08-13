export default {
  entity: {
    id: 'e7be3a3b-1032-4734-b263-f6be9cca54b3',
    name: '彻底揭发批判“四人帮”在苏州地区的罪恶活动',
    internal: false,
    type: 'img',
    official: false,
    author: '刘锡庚',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e7be3a3b-1032-4734-b263-f6be9cca54b3/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e7be3a3b-1032-4734-b263-f6be9cca54b3/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e7be3a3b-1032-4734-b263-f6be9cca54b3/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e7be3a3b-1032-4734-b263-f6be9cca54b3/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e7be3a3b-1032-4734-b263-f6be9cca54b3/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '彻底揭发批判“四人帮”在苏州地区的罪恶活动',
        authors: [
          '刘锡庚',
        ],
        page_start: 1,
        page_end: 5,
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
  path: 'e7be3a3b-1032-4734-b263-f6be9cca54b3',
  resource_type: 'book',
  version: 2,
};