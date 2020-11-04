import { Simbol} from './simbolo.module'
export class Polaca{
	static Do(expresion: string[]):string[]{
		let stack_resultado: string[] = [];
		let stack_operadores: string[] = [];
		let expresion_length = expresion.length;

		for(let i = 0; i<expresion_length; i++){
			let elemento = expresion.pop();
			if(Simbol.is(elemento)){
				while(high_presedence_in_stack(elemento, stack_operadores)){
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

}
function high_presedence_in_stack(elemento: string, stack: string[]): boolean{
	return is_lower_precedence(elemento, stack[stack.length -1]);
}
function is_lower_precedence( elemento: string, stack_operators: string): boolean{
	if(elemento == '+' || elemento == '-')
		if(stack_operators == '*' || stack_operators == '/')
			return true;
	return false;
}
