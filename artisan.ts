import yargs, { Arguments } from 'yargs';
import { SwaggerRequestTemplate } from './code_templates/SwaggerRequestTemplate';
import { SwaggerPathTemplate } from './code_templates/SwaggerPathTemplate';
import { SwaggerResponseTemplate } from './code_templates/SwaggerResponseTemplate';
import { SwaggerHelperTemplate } from './code_templates/SwaggerHelperTemplate';
import { SequenceTemplate } from './code_templates/SequenceTemplate';

const commands = yargs(process.argv.slice(2)).options({
    docs: { type: 'boolean', default: false, describe: 'Generate Swagger request, response & path' },
});

try {
    commands.command(
        'make:swagger <name>',
        'Create a swagger file',
        () => {},
        (argv: Arguments) => {
            const path = new SwaggerPathTemplate(<string>argv.name);
            path.generate();

            const request = new SwaggerRequestTemplate(<string>argv.name);
            request.generate();

            const response = new SwaggerResponseTemplate(<string>argv.name);
            response.generate();

            const helper = new SwaggerHelperTemplate(<string>argv.name);
            helper.generate();

            console.log('Swagger successfully created');
        },
    );

    commands.command(
        'make:sequence <name>',
        'Create a sequence file',
        () => {},
        (argv: Arguments) => {
            const template = new SequenceTemplate(<string>argv.name);
            template.generate();

            console.log('Sequence successfully created');
        },
    );

    commands.strictCommands();
    commands.argv;
} catch (error) {
    console.log(error.message);
}
