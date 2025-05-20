export class CreateVendecarroDto {
    @IsInt()
    id: number; // Id do carro
    manufactureYear: number; // Ano de fabricação do carro
    horsepower: number; // potência do motor em cavalos (hp)
    @IsString() 
    brand: string; // Marca do carro
    model: string; // Nome/Modelo do carro
    engine: string; // Motor 4.0 V8
}

import {
    IsInt,
    IsString
} from 'class-validator'

