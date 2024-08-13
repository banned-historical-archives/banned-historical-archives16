export default {
  entity: {
    id: '3c3a97ad-971f-437d-9c90-88bd757a26fb',
    name: '南通情况',
    internal: false,
    type: 'img',
    official: false,
    author: '男同事革命委员会办事组',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c3a97ad-971f-437d-9c90-88bd757a26fb/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c3a97ad-971f-437d-9c90-88bd757a26fb/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c3a97ad-971f-437d-9c90-88bd757a26fb/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c3a97ad-971f-437d-9c90-88bd757a26fb/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c3a97ad-971f-437d-9c90-88bd757a26fb/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3c3a97ad-971f-437d-9c90-88bd757a26fb/6.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '从曾邦元干的坏事看“四人帮”及其代理人在江苏的罪恶活动',
        authors: [
          '黄玉生',
        ],
        page_start: 1,
        page_end: 6,
        dates: [
          {
            year: 1977,
            month: 2,
            day: 5,
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
  path: '3c3a97ad-971f-437d-9c90-88bd757a26fb',
  resource_type: 'book',
  version: 2,
};