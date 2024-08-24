import {IVisualBackground} from "../../configs/visual-settings";

export const getCssValueByVisualBackground = (item: IVisualBackground) => {
  return item.type === 'image' ? `url(${item.img}) center / cover no-repeat` : item.hex
}