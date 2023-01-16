import { pascalCase } from 'case-anything';
import { existsSync, writeFileSync } from 'fs';

const content = `
import { ResponseSchema } from '../commands/Schema';

export class <class_name> extends ResponseSchema {
    constructor() {
        super();
    }
}

`;

export class SwaggerResponseTemplate {
    private readonly className: string;

    constructor(name: string) {
        this.className = pascalCase(`${name.trim()}_response`);
    }

    generate(): void {
        if (existsSync(`./docs/swagger/schemas/${this.className}.ts`))
            throw new Error('Swagger Response already existed');
        writeFileSync(
            `./docs/swagger/schemas/${this.className}.ts`,
            content.trim().replace(/<class_name>/g, this.className),
        );
    }
}
