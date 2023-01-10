import { Typography, Button, Upload } from "antd";
import { useState } from "react";
const { Title } = Typography;
interface Props {}

export const SubImage = (props: Props) => {
  const [images, setImages] = useState([]);
  const handleChange = (data) => {
    const { fileList } = data;
    console.log(fileList);
    setImages(fileList);
  };
  return (
    <div>
      <div className="flex flex-col">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[]}
          className="upload-list-inline"
          onChange={handleChange}
          accept="image/png, image/jpeg"
          multiple={true}
        >
          <Button>Upload</Button>
        </Upload>
      </div>
      <div className="flex gap-2 flex-wrap">
        {images.map((image) => (
          <div className="flex gap-2 flex-wrap overflow-hidden">
            <img
              className="w-[100px] h-[100px] object-cover rounded-lg"
              src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2021/11/o-creating-circular-image-in-flutter.png?w=950&ssl=1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubImage;
