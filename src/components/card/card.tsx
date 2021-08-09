import React from "react";

interface ICard {
  content: string;
  icon: JSX.Element;
  title?: string;
}

export const Card = ({ content, icon }: ICard): JSX.Element => {
  return (
    <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-900">{content}</p>
      </div>
    </div>
  );
};
