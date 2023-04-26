import React, { FormEvent, useState } from "react";
import "./tailwind.css";
import { useMultiStepForm } from "./useMultiStepForm";
import { UserForm } from "./components/userForm";
import { AddressForm } from "./components/addressForm";
import { AccountForm } from "./components/accountForm";


// this is the magic of TP, it helps us create types instead of guessing the type
type FormData = {
	firstName: string;
	lastName: string;
	age: string;
	area: string;
	streetNumber: string;
	houseNumber: string;
	email: string;
	password: string;
};

const INITIAL_DATA: FormData = {
	firstName: "",
	lastName: "",
	age: "",
	area: "",
	streetNumber: "",
	houseNumber: "",
	email: "",
	password: "",
};


function App() {

	const [data, setData] = useState(INITIAL_DATA);

	function updateFields(fields: Partial <FormData>) {
		setData(prev =>{
			return {...prev, ...fields}
		})
	}

	// passing in the jsx to the hook for it to handle the form interaction
	const {
		currentStepIndex,
		steps,
		step,
		isFirstStep,
		isLastStep,
		back,
		next,
		goTo,
	} = useMultiStepForm([
		<UserForm {...data} updateFields={updateFields} />,
		<AddressForm {...data} updateFields={updateFields} />,
		<AccountForm {...data} updateFields={updateFields} />,
	]);


	// doing this so that the next() works as both a submit button and a next button
	function onSub(e: FormEvent) {
		e.preventDefault();
		if(!isLastStep) return next();
		alert("Account creation success!");
	}

	return (
		<div className="max-w-lg mx-auto p-20 my-20 border-blue-400 border-2 border-dashed">
			<h2 className="text-2xl font-bold mb-6">User Details</h2>
			{/* ? why is this not working with % */}
			<div className="counter relative">
				<span className="absolute -top-[15vh] -left-3/2">
					{currentStepIndex + 1} / {steps.length}
				</span>
			</div>

			<form onSubmit={onSub}>
				{step}

				<div className="buttons-wrapper flex justify-between">
					{!isFirstStep && (
						<button
							onClick={back}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							type="submit"
						>
							Back
						</button>
					)}
					{!isLastStep && (
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							type="submit"
						>
							Next
						</button>
					)}
					{isLastStep && (
						<button
							className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
							type="submit"
						>
							Submit
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default App;
