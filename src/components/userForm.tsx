type userData = {
	firstName: string;
	lastName: string;
	age: string;
};

type userFormProps = userData & {
	updateFields: (fields: Partial<userData>) => void;
};


export function UserForm({firstName, lastName, age, updateFields}:userFormProps) {
    	return (
			<>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="firstName">
						First Name
					</label>
					<input
						value={firstName}
						onChange={(e) =>
							updateFields({ firstName: e.target.value })
						}
						className="border rounded w-full py-2 px-3"
						type="text"
						id="firstName"
						name="firstName"
						placeholder="John"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="lastName">
						Last Name
					</label>
					<input
						value={lastName}
						onChange={(e) =>
							updateFields({ lastName: e.target.value })
						}
						className="border rounded w-full py-2 px-3"
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Doe"
					/>
				</div>
				<div className="mb-4">
					<label className="block font-bold mb-2" htmlFor="age">
						Age
					</label>
					<input
						value={age}
						onChange={(e) =>
							updateFields({ age: e.target.value })
						}
						className="border rounded w-full py-2 px-3"
						type="number"
						id="age"
						name="age"
						placeholder="30"
						required
					/>
				</div>
			</>
		);	
}