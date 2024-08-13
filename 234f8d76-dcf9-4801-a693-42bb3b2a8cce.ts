export default {
  entity: {
    id: '234f8d76-dcf9-4801-a693-42bb3b2a8cce',
    name: '揭发杨广立追随“四人帮”图谋篡党夺权的罪行',
    internal: false,
    type: 'img',
    official: false,
    author: '汪良',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/234f8d76-dcf9-4801-a693-42bb3b2a8cce/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/234f8d76-dcf9-4801-a693-42bb3b2a8cce/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/234f8d76-dcf9-4801-a693-42bb3b2a8cce/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/234f8d76-dcf9-4801-a693-42bb3b2a8cce/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/234f8d76-dcf9-4801-a693-42bb3b2a8cce/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/234f8d76-dcf9-4801-a693-42bb3b2a8cce/6.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '揭发杨广立追随“四人帮”图谋篡党夺权的罪行',
        authors: [
          '汪良',
        ],
        page_start: 1,
        page_end: 6,
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
  path: '234f8d76-dcf9-4801-a693-42bb3b2a8cce',
  resource_type: 'book',
  version: 2,
};