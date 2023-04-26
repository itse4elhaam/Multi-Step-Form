type addressData = {
	area: string;
	streetNumber: string;
	houseNumber: string;
};

type addFormProps = addressData & {
	updateFields: (fields: Partial<addressData>) => void;
};

export function AddressForm({ area, streetNumber, houseNumber, updateFields }: addFormProps) {
	return (
		<>
			<div className="mb-4">
				<label className="block font-bold mb-2" htmlFor="Area">
					Area
				</label>
				<input
					value={area}
					onChange={(e) => updateFields({ area: e.target.value })}
					className="border rounded w-full py-2 px-3"
					type="text"
					id="Area"
					name="Area"
					placeholder="Gulberg"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block font-bold mb-2" htmlFor="StreetNumber">
					Street Number
				</label>
				<input
					value={streetNumber}
					onChange={(e) =>
						updateFields({ streetNumber: e.target.value })
					}
					className="border rounded w-full py-2 px-3"
					type="text"
					id="streetNumber"
					name="streetNumber"
					placeholder="24"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block font-bold mb-2" htmlFor="HouseNumber">
					House Number
				</label>
				<input
					value={houseNumber}
					onChange={(e) => updateFields({ houseNumber: e.target.value })}
					className="border rounded w-full py-2 px-3"
					type="text"
					id="houseNumber"
					name="houseNumber"
					placeholder="H-30"
				/>
			</div>
		</>
	);
}
