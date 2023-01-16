import { pascalCase } from 'case-anything';
import { existsSync, writeFileSync } from 'fs';

const content = `
import { Schema } from '../commands/Schema';

export class <class_name> extends Schema {
    constructor() {
        super();
    }
}

`;

export class SwaggerRequestTemplate {
    private readonly className: string;

    constructor(name: string) {
        this.className = pascalCase(`${name.trim()}_request`);
    }

    generate(): void {
        if (existsSync(`./docs/swagger/schemas/${this.className}Request.ts`))
            throw new Error('Swagger Request already existed');
        writeFileSync(
            `./docs/swagger/schemas/${this.className}.ts`,
            content.trim().replace(/<class_name>/g, this.className),
        );
    }
}
