import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

// 登録するにはまずメタ情報を追加
const meta: Meta<typeof Circle> = {
    component:Circle,
    // titleにExample/Circleとすると中にExampleの中に展開できる
    title:"Example/Circle",
    // 下記argTypesでラジオボタンの変更が出来る
    // typeをcolorに変更すると１６進数の色選択が出来る(tailwindcss導入している為表示されない)
    argTypes:{
        variant:{
            control:{type:"select"},
            options:["orange","green","yellow","red"],
        },
    },
    // tagsをmetaに追加する事で作成したCircleのドキュメントを作成できる
    tags: ["autodocs"]
};

export default meta;

// storyに型を付ける
type Story = StoryObj<typeof meta>;


// 引数にargsを与えることで色等を変更することができる


// ストーリーのコメントを追加したい場合は、下記コメントを入力する

/**
 * オランゲランゲ懐かしいよね
 */
export const BaseCircle: Story = {
    args: {
        variant: "orange",
    },
};

/**
 * 緑って目に良いらしいよ
 */
export const GreenCircle:Story = {
    args: {
        variant: "green",
    },
};


/**
 * 黄色保留かぁ
 */
export const YellowCircle:Story = {
    args: {
        variant: "yellow",
    },
};


/**
 * あ！ゆかちゃん赤保留！赤保留！
 */
export const RedCircle:Story = {
    args: {
        variant: "red",
    },
};


// 上記Circleをグループ化させる処理



/**
 * 創成合体keke
 */
export const GroupedCircle:Story = {
    render:() =>(
        <div style={{padding: 10}}>
            <Circle variant="orange" />
            <Circle variant="green" />
            <Circle variant="yellow" />
            <Circle variant="red" />
        </div>
    )
}