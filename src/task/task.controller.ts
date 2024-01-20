import { Controller, Get } from '@nestjs/common';
import { TaskService, Task } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get('/')
    listTasks(): Task[] {
        return this.taskService.listTasks();
    }

}
