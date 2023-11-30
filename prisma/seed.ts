import prisma from '../lib/prisma';
import { instructionsList } from '../app/api/instructions/localInstructionsList';

async function main() {
  await prisma.post.createMany({
    data: instructionsList,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.warn(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
