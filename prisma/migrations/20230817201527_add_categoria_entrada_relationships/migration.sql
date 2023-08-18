-- CreateTable
CREATE TABLE `Entrada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(128) NOT NULL,
    `pago` BOOLEAN NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `tipo` VARCHAR(64) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `categoria_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entrada` ADD CONSTRAINT `Entrada_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
