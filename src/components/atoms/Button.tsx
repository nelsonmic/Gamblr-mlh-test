import { PropsWithChildren, Ref, forwardRef } from "react";
import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import Text from "./Text";
import { useAppearanceContext } from "providers/Appearance.provider";
import { ActivityIndicator } from "react-native";

export type ButtonProps = PressableProps &
	PropsWithChildren & {
		color?: "primary" | "secondary" | "tertiary";
		isLoading?: boolean;
		size?: "sm" | "md" | "lg" | "xl";
		variant?: "contained" | "outlined" | "text";
		rightIcon?: React.ReactElement
	};

const Button = forwardRef<PressableProps, ButtonProps>(
	(
		{
			children,
			className,
			color = "primary",
			isLoading,
			size = "md",
			variant = "contained",
			rightIcon,
			...rest
		},
		ref
	) => {
		const { isDarkMode, colors } = useAppearanceContext();
		
		const baseButtonClass =
			"font-inter rounded-3xl flex-row items-center justify-center space-x-4";

		const mapButtonSize = {
			lg: "px-5 py-5",
			md: "px-4 py-3",
			sm: "px-3 py-2",
			xl: "px-6 py-5"
		};

		const buttonVariantMap = {
			contained: {
				primary: `${isDarkMode ? "bg-white-100" :"bg-black-100"} ${isLoading ? "opacity-50" : ""}`,
				secondary: `bg-white-100 ${isLoading ? "opacity-50" : ""}`,
				tertiary: `bg-neutral-600 text-neutral-50 ${
					isLoading ? "opacity-50" : ""
				}`
			},
			outlined: {
				primary: `${isLoading ? "opacity-50" : "border"} ${isDarkMode? "border-white-100" : "border-black-100"}`,
				secondary: `${isLoading ? "opacity-50" : ""}`,
				tertiary: `${isLoading ? "opacity-50" : ""}`
			},
			text: {
				primary: `bg-transparent text-white-100`,
				secondary: `bg-transparent text-white-100`,
				tertiary: `bg-transparent text-white-100`
			}
		};

		const buttonTextVariantMap = {
			contained: {
				primary: isDarkMode? "text-black-100" : "text-white-100",
				secondary: "text-black-100",
				tertiary: "text-white-100"
			},
			outlined: {
				primary: isDarkMode? "text-white-100" : "text-black-100",
				secondary: isDarkMode? "text-white-100" : "text-black-100",
				tertiary: isDarkMode? "text-white-100" : "text-black-100"
			},
			text: {
				primary: isDarkMode? "text-white-100" : "text-black-100",
				secondary: isDarkMode? "text-white-100" : "text-black-100",
				tertiary:isDarkMode? "text-white-100" : "text-black-100"
			}
		};

		const renderTextContent = () => (
			<Text
				className={clsx(
					buttonTextVariantMap[variant][color],
					"font-semibold font-inter text-base leading-normal text-center"
				)}
			>
				{children}
			</Text>
		);

		return (
			<Pressable
				ref={ref as Ref<View> | undefined}
				className={clsx(
					baseButtonClass,
					buttonVariantMap[variant][color],
					mapButtonSize[size],
					className
				)}
				disabled={isLoading}
				{...rest}
			>
				{renderTextContent()}
				{isLoading ? (
					<ActivityIndicator 
						color={isDarkMode? colors.dark : colors.light}
					/>
				): null}
				{rightIcon && rightIcon}
			</Pressable>
		);
	}
);

Button.displayName = "Button";

export default Button;
