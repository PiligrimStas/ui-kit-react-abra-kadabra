import React, { SVGProps, FC } from "react";

import { ReactComponent as CheckIconComponent } from "../../core/assets/icons/check.svg";
import { ReactComponent as QuestionMarkIconComponent } from "../../core/assets/icons/question-mark.svg";
import { ReactComponent as UserIconComponent } from "../../core/assets/icons/user.svg";

export type IconProps = SVGProps<SVGSVGElement>; // Использование React.SVGProps для SVG элементов

const DEFAULT_SIZE = 25;

//Создание компонента с типами для IconProps
const createIcon =
  (Icon: FC<SVGProps<SVGSVGElement>>): FC<SVGProps<SVGSVGElement>> =>
  (props) =>
    <Icon width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;

export const CheckIcon = createIcon(CheckIconComponent);
export const QuestionMarkIcon = createIcon(QuestionMarkIconComponent);
export const UserIcon = createIcon(UserIconComponent);
