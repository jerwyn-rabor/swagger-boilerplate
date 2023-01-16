import { pascalCase } from 'case-anything';
import { existsSync, writeFileSync } from 'fs';

const content = `
import { HttpStatus, Method, Path } from '../commands/Path';
import { SingleData } from '../helpers/General';

const METHOD = Method.GET;
const PATH = '';
const TAG = '';
const DESCRIPTION = '';

type Response = SingleData<>;

export class <class_name> extends Path {
    constructor() {
        super(METHOD, PATH, TAG, DESCRIPTION);
    }
}

`;

export class SwaggerPathTemplate {
    private readonly className: string;

    constructor(name: string) {
        this.className = pascalCase(name.trim());
    }

    generate(): void {
        if (existsSync(`./docs/swagger/paths/${this.className}.ts`)) throw new Error('Swagger path already existed');
        writeFileSync(
            `./docs/swagger/paths/${this.className}.ts`,
            content.trim().replace(/<class_name>/g, this.className),
        );
    }
}
