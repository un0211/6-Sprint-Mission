import styles from "./AddForm.module.scss";
import { ChangeEvent, useState } from "react";
import ImageInput from "../common/ImageInput";

export interface FormData {
  title: string;
  content: string;
  image?: string;
}

function AddForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: e.target.value,
    }));
  };

  const handleImageChange = (file: File) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      file,
    }));
  };

  const handleImageDelete = () => {
    setFormData((prevFormData) => {
      delete prevFormData.image;
      return prevFormData;
    });
  };

  return (
    <form className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.title}>게시글 쓰기</h2>
        <button className={styles.button} type="submit" disabled>
          등록
        </button>
      </header>

      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="title">
          *제목
        </label>
        <input
          id="title"
          value={formData.title}
          placeholder="제목을 입력해주세요"
          type="text"
          autoComplete="off"
          onChange={handleTitleChange}
        />
      </div>

      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="content">
          *내용
        </label>
        <textarea
          id="content"
          value={formData.content}
          placeholder="내용을 입력해주세요"
          onChange={handleContentChange}
        />
      </div>

      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="image">
          이미지
        </label>
        <ImageInput
          name="image"
          onChange={handleImageChange}
          onDeleteClick={handleImageDelete}
        />
      </div>
    </form>
  );
}

export default AddForm;
