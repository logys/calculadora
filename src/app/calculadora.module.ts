export class Calculadora {
	stack_string_display: string = '';
	private static instance: Calculadora;
	private constructor() { }
	public static getInstance(): Calculadora {
		if (!Calculadora.instance) {
			Calculadora.instance = new Calculadora();
		}
		return Calculadora.instance;
	}
	public stack_string(): string{
		return this.stack_string_display;
	}
	public add_to_string(character: string): void{
		if(this.stack_string_display == "Infinity"){
			this.stack_string_display = '';
		}
		if(this.already_simbol_in_stack(character)){
			this.stack_string_display = this.stack_string_display.slice(0, -3);
		}
		this.stack_string_display += character;
	}
	private already_simbol_in_stack(character: string): boolean{
		return this.is_simbol(character[1]) && 
			this.is_simbol(this.stack_string_display[this.stack_string_display.length -2]);
	}
	public compute_result():void{
		let divided_string_display = this.stack_string_display.split(" ");
		let prefix_string = this.convert_string_prefix(divided_string_display);
		this.stack_string_display = this.evualuate_math_prefix(prefix_string);
	}
	private evualuate_math_prefix(expresion: string[]):string{
		while(expresion.length > 1){
			console.log(expresion);
			let index_two_next_numbers: number = this.find_two_numbers(expresion);
			let operate_two_result: string = this.operate_two(expresion, index_two_next_numbers);
			expresion.splice(index_two_next_numbers-1, 3, operate_two_result);
		}
		return expresion[0];
	}
	private operate_two(expresion: string[], index: number): string{
		let result: number=0;
		switch(expresion[index -1]) {
			case '+': {
				result = Number(expresion[index]) + Number(expresion[index+1]);
				break;
			}
			case '-': {
				result = Number(expresion[index]) - Number(expresion[index+1]);
				break;
			}
			case '*': {
				result = Number(expresion[index]) * Number(expresion[index+1]);
				break;
			}
			case '/': {
				result = Number(expresion[index]) / Number(expresion[index+1]);
				break;
			}
		}
		return String(result);
	}
	private find_two_numbers(expresion: string[]): number{
		for(let i = 0; ;i++){
			if(this.is_number(expresion[i]) && this.is_number(expresion[i+1]))
			   return i;
		}
	}
	private is_number(number: string): boolean{
		return !this.is_simbol(number);
	}
	private convert_string_prefix(expresion: string[]): string[]{
		//Notación polaca inversa
		let stack_resultado: string[] = [];
		let stack_operadores: string[] = [];
		let expresion_length = expresion.length;

		for(let i = 0; i<expresion_length; i++){
			let elemento = expresion.pop();
			if(this.is_simbol(elemento)){
				while(this.high_presedence_in_stack(elemento, stack_operadores)){
					stack_resultado.push(stack_operadores.pop());
				}
				stack_operadores.push(elemento);
			}else
				stack_resultado.push(elemento);
		}
		while(stack_operadores.length > 0){
			stack_resultado.push(stack_operadores.pop());
		}
		stack_resultado = stack_resultado.reverse();
		return stack_resultado;
	}
	private high_presedence_in_stack(elemento: string, stack: string[]): boolean{
		return this.is_lower_precedence(elemento, stack[stack.length -1]);

	}
	private is_simbol(simbol: string): boolean{
		return simbol == '+' || simbol == '-' || simbol == '*' || simbol == '/' ;
	}
	private is_lower_precedence( elemento: string, stack_operators: string): boolean{
		if(elemento == '+' || elemento == '-')
			if(stack_operators == '*' || stack_operators == '/')
				return true;
		return false;
	}
	public clear_result():void{
		this.stack_string_display = '';
	}
}
