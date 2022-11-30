import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport, ClientKafka } from '@nestjs/microservices';
import { kafkaOptions } from './config/sys.config';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.KAFKA,
        options: kafkaOptions,
    });
    await app.listen();
}
bootstrap();
