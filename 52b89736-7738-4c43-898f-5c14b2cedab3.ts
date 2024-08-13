export default {
  entity: {
    id: '52b89736-7738-4c43-898f-5c14b2cedab3',
    name: '揭发批判“四人帮”在苏州市和全省犯下的滔天罪行',
    internal: false,
    type: 'img',
    official: false,
    author: '张泽民',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/9.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/10.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/11.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/12.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/52b89736-7738-4c43-898f-5c14b2cedab3/13.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '揭发批判“四人帮”在苏州市和全省犯下的滔天罪行',
        authors: [
          '张泽民',
        ],
        page_start: 1,
        page_end: 13,
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
  path: '52b89736-7738-4c43-898f-5c14b2cedab3',
  resource_type: 'book',
  version: 2,
};