import { pascalCase } from 'case-anything';
import { writeFileSync, mkdirSync } from 'fs';

const contact = `
export interface <class_name>Request {}

export interface <class_name>Response {}

`;

const generator = `
import { <class_name>Request, <class_name>Response } from './contract';
import * as faker from 'faker';

export class Generator {
    static request(): <class_name>Request {
        return {};
    }

    static response(): <class_name>Response {
        return {};
    }
}

`;

const structure = `
import { Types } from '../../commands/Types';

export const _RESPONSE = Types.OBJECT({}, '');

`;

export class SwaggerHelperTemplate {
    private readonly className: string;

    constructor(name: string) {
        this.className = pascalCase(name.trim());
    }

    generate(): void {
        mkdirSync(`./docs/swagger/helpers/${this.className}`, { recursive: true });

        writeFileSync(
            `./docs/swagger/helpers/${this.className}/contract.ts`,
            contact.trim().replace(/<class_name>/g, this.className),
        );

        writeFileSync(
            `./docs/swagger/helpers/${this.className}/generator.ts`,
            generator.trim().replace(/<class_name>/g, this.className),
        );

        writeFileSync(
            `./docs/swagger/helpers/${this.className}/structure.ts`,
            structure.trim().replace(/<class_name>/g, this.className),
        );
    }
}
