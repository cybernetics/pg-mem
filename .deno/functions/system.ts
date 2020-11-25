import { Types } from '../datatypes.ts';
import { FunctionDefinition } from '../interfaces.ts';

export const systemFunctions: FunctionDefinition[] = [
    // ugly hack...
    {
        name: 'current_schema',
        returns: Types.text(),
        implementation: () => 'public',
    },
]
