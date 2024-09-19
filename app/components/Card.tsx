import { useState } from 'react';

interface CardProps {
  card: {
    id: number;
    title: string;
    description: string;
  };
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ card, onDelete }) => {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);

  //カードのタイトルを更新する関数
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  //カードの説明を更新する関数
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  return (
    <div className="bg-white rounded shadow p-3 mb-2">
      <button
        className="float-right text-red-600"
        onClick={onDelete}
      >
        完了
      </button>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="w-full mb-2 border-b focus:outline-none focus:border-blue-500"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className="w-full border rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Card;
