import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Button } from '../Button/Button';

export interface imageDto {
  pathStaic: string, pathGif: string, alt: string
}

export interface CardWorkProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string;
  size: 'h-md' | 'h-lg';
  color: 'blue-2' | 'blue-4' | 'blue-5'
  image: imageDto,
  pathGitHubRepository: string,
  pathPage: string,
}

export function CardWork({
  className, size, color, image, pathGitHubRepository, pathPage, ...props
}: CardWorkProps) {
  const [path, setPath] = useState(image.pathStaic);
  const [showButton, setShowButton] = useState(false);

  const setMoutEnter = () => {
    setPath(image.pathGif);
    setShowButton(true);
  };

  const setMoutLeave = () => {
    setPath(image.pathStaic);
    setShowButton(false);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // porque a porra da imagem não aparece?
  return (
    <div
      onMouseEnter={() => setMoutEnter()}
      onMouseLeave={() => setMoutLeave()}
      className={clsx(
        'rounded-[20px] min-w-[428px] max-w-[428px] border-8 ',
        {
          'border-blue-200': color === 'blue-2',
          'border-blue-400': color === 'blue-4',
          'border-blue-500': color === 'blue-5',
          'h-[190px]': size === 'h-md',
          'h-[250px]': size === 'h-lg',
        },
        className,
      )}
      {...props}
    >
      <img src={path} className="w-full h-full rounded-[10px] relative " alt={image.alt} />

      <div className="flex gap-5 justify-center items-center w-full h-[55px] relative mt-[-55px]">
        {showButton
          ? [
            <Button
              onClick={() => openInNewTab(pathGitHubRepository)}
              className="py-2 px-2 text-[14px] max-h-[40px]"
            >
              GitHub
            </Button>,
            <Button
              onClick={() => openInNewTab(pathPage)}
              className="py-2 px-2 text-[14px] max-h-[40px] "
            >
              Página
            </Button>]
          : ''}
      </div>
    </div>
  );
}

CardWork.defaultProps = {
  className: '',

};
