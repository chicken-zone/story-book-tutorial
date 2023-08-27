import React from 'react'

// typeの指定
type Props = {
  /**
 * discriptionの説明部分
 */
  variant:"orange" | "green"| "yellow"| "red"
};

/**
 * kekeプロジェクトで使用する円のUIコンポーネント
 */
const Circle = ({variant}:Props) => {

  let bgColor;

  switch(variant){
    case "orange":
      bgColor ="bg-orange-500";
      break;
      case "green":
        bgColor ="bg-green-500";
        break;
        case "yellow":
          bgColor ="bg-yellow-500";
          break;
          case "red":
            bgColor ="bg-red-500";
            break;
  }

// colorをPropsで受け取り、switch文で与える値を変化させる
  return (
    <div className={`${bgColor} w-14 h-14 rounded-full`}></div>
  )
}

export default Circle