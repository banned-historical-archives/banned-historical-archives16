export default {
  entity: {
    id: 'e8de4d3a-39bd-49be-899f-329fcdc9bd09',
    name: '何俊德同志在市委常委扩大会议结束时的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '何俊德',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/9.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/10.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/11.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/12.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/e8de4d3a-39bd-49be-899f-329fcdc9bd09/13.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '何俊德同志在市委常委扩大会议结束时的讲话',
        authors: [
          '何俊德',
        ],
        page_start: 1,
        page_end: 13,
        dates: [
          {
            year: 1977,
            month: 11,
            day: 21,
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
  path: 'e8de4d3a-39bd-49be-899f-329fcdc9bd09',
  resource_type: 'book',
  version: 2,
};