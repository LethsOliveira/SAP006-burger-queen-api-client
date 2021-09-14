import React from "react";

export default function Input () {
	return (
		<section>
			<input
				id="email"
				type="email"
				placeholder="email@email.com"
				className="Input"
			/>
			<select 
				id="selectPosition" 
				placeholder="Selecione o cargo" 
				className="SelectPosition"
			>
				<option 
					value="Chef"
				>
					Chef
				</option>
				<option 
					value="Atendente"
				>
					Atendente
				</option>
				<option 
					value="Gerente"
				>
					Gerente
				</option>
			</select>
			<input
				id="password"
				type="password"
				placeholder="Senha"
				className="Input"
			/>
		</section>
	);
}
