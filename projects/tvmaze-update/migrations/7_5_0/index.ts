import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';

export default function(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkgPath = '/package.json';
    const buffer = tree.read(pkgPath);
    if (buffer == null) {
      throw new SchematicsException('Could not read package.json');
    }

    const content = buffer.toString();
    const pkg = JSON.parse(content);

    if (pkg === null || typeof pkg !== 'object' || Array.isArray(pkg)) {
      throw new SchematicsException('Error reading package.json');
    }

    if (!pkg.dependencies) {
      pkg.dependencies = {};
    }

    pkg.dependencies['underscore'] = '^1.9.1';
    tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));

    return tree;
  };
}
