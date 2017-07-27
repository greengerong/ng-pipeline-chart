import { Component } from '@angular/core';
import { PipelineConfig } from './pipeline-config/pipeline-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  types = ['构建', 'Sonar扫描', 'HUB扫描', '发布', 'DEV部署', 'ST部署', 'UAT部署', 'PROD部署'];

  pipelineConfig: PipelineConfig[] = [
    {
      id: '1',
      name: '构建',
      enterPoint: true,
      triggers: ['4', '2', '3'],
      config: {
        batch: 'mvn clean install'
      }
    },
    {
      id: '2',
      name: 'HUB扫描',
      config: {
        batch: 'hub plugin'
      }
    },
    {
      id: '3',
      name: 'Sonar',
      config: {
        language: 'java',
        encoding: 'utf-8',
        batch: 'sonarqueryable -xxx'
      },
    },
    {
      id: '4',
      name: '入库',
      triggers: ['5'],
      config: {}
    },
    {
      id: '5',
      name: 'DEV部署',
      triggers: ['6'],
      config: {}
    },
    {
      id: '6',
      name: 'ST部署',
      triggers: ['7'],
      config: {}
    },
    {
      id: '7',
      name: 'UAT部署',
      triggers: ['8'],
      config: {}
    },
    {
      id: '8',
      name: 'PROD部署',
      config: {}
    },

  ];

  configClick($event) {
    console.log('configClick', $event);
  }
}
