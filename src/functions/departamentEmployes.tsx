import { direcao, adiministrativo, portaria, motoristas, despensa, gerais, lavandaria, cozinha, creche, preEscola, primeiroCiclo, casaAcolhimento } from "../helpers/equipa";

export const getEmployeesByDepartment = (deptSelected: string) => {
    let departmentEmployees: { id: number; name: string; cargo: string; img: string; }[] = [];

    switch (deptSelected) {
        case 'Direção':
            departmentEmployees = direcao;
            break;
        case 'Serviços Administrativos':
            departmentEmployees = adiministrativo;
            break;
        case 'Portaria':
            departmentEmployees = portaria;
            break;
        case 'Motoristas':
            departmentEmployees = motoristas;
            break;
        case 'Despensa':
            departmentEmployees = despensa;
            break;
        case 'Serviços Gerais':
            departmentEmployees = gerais;
            break;
        case 'Lavandaria':
            departmentEmployees = lavandaria;
            break;
        case 'Cozinha':
            departmentEmployees = cozinha;
            break;
        case 'Creche':
            departmentEmployees = creche;
            break;
        case 'Ensino Pré-Escolar':
            departmentEmployees = preEscola;
            break;
        case '1º Ciclo':
            departmentEmployees = primeiroCiclo;
            break;
        case 'Casa de Acolhimento':
            departmentEmployees = casaAcolhimento;
            break;
        default:
            departmentEmployees = [];
    }

    return departmentEmployees;
};