type accData = {
	email: string;
	password: string;
};

type userFormProps = accData & {
	updateFields: (fields: Partial<accData>) => void;
};

export function AccountForm({ email, password, updateFields }: userFormProps) {
	return (
		<>
			<div className="mb-4">
				<label className="block font-bold mb-2" htmlFor="Email">
					Email
				</label>
				<input
					value={email}
					onChange={(e) => updateFields({ email: e.target.value })}
					className="border rounded w-full py-2 px-3"
					type="Email"
					id="Email"
					name="Email"
					placeholder="John@gmail.com"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block font-bold mb-2" htmlFor="Password">
					Password
				</label>
				<input
					value={password}
					onChange={(e) => updateFields({ password: e.target.value })}
					className="border rounded w-full py-2 px-3"
					type="password"
					id="password"
					name="password"
					placeholder="...."
					required
				/>
			</div>
		</>
	);
}
