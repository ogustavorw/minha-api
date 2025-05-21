import {
    IsInt,
    IsString
} from 'class-validator'


export class CreateVendecarroDto {
    @IsInt()
    // Removi a chamada do ID, pois ao cadastrar um novo carro, estava dando erro. Cadastrei um carro e no banco de dados, identifiquei que o mesmo foi inserido com o id = 0, ao tentar cadastrar um novo carro, o processo não foi concluido.
    manufactureYear: number; // Ano de fabricação do carro
    horsepower: number; // potência do motor em cavalos (hp)
    @IsString() 
    brand: string; // Marca do carro
    model: string; // Nome/Modelo do carro
    engine: string; // Motor 4.0 V8
}