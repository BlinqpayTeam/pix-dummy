import { Loader } from "lucide-react";
import { ReactNode } from "react";


type Props = {
	text: string | ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
	loading?: boolean;
	fullWidth?: boolean;
	whiteBg?: boolean;
	className?: string;
	customBg?: string;
};

const BlinqButton = ({
	text,
	type,
	disabled,
	loading,
	onClick,
	fullWidth,
	className,
	customBg,
	whiteBg
}: Props) => {
	return (

		<button
			type={type}
			onClick={onClick}
			disabled={loading || disabled}
			style={{ backgroundColor: customBg ? customBg : undefined }}
			className={`px-3 py-2.5 flex items-center justify-center whitespace-nowrap rounded-[6px] font-medium font-creato text-[12px] md:t4 tracking-wide active:scale-90 transition-all durationn-300 disabled:bg-opacity-70 
			${whiteBg ? "bg-white text-black" : "bg-blq-purple-100 text-white disabled:bg-blq-gray-200 disabled:text-blq-gray-250"} 
				${fullWidth && "w-full"} ${className}
				${disabled && 'cursor-not-allowed bg-blq-gray-50 text-black text-opacity-50'}`}>

			{loading && (
				<Loader className="text-white animate-spin mr-2" size="1rem" />
			)}
			{text}
		</button>
	)

};

export default BlinqButton;