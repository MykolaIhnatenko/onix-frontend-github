import { IInfiniteDragSliderItem } from '../../../components/InfiniteDragSlider/interfaces/IInfiniteDragSlider';

const listItemStyle = `pb-[20px] text-[20px] leading-[30px]
screen-md:text-[14px] screen-md:leading-[17px] screen-md:pb-[12px]`;

const devopsSolutionsInfiniteDragSliderdata: IInfiniteDragSliderItem[] = [
  {
    id: 1,
    title: 'Cloud Providers',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Amazon Web Services</p></li>
        <li className={listItemStyle}><p>﹂ Google Cloud Platform</p></li>
        <li className={listItemStyle}><p>﹂ Digital Ocean</p></li>
        <li className={listItemStyle}><p>﹂ Azure</p></li>
        <li className={listItemStyle}><p>﹂ Alibaba Cloud</p></li>
        <li className={listItemStyle}><p>﹂ Tencent Cloud</p></li>
      </ul>
    ),
    number: '01',
  },
  {
    id: 2,
    title: 'Operating Systems',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Linux (Debian, Ubuntu, CentOS, RHEL)</p></li>
        <li className={listItemStyle}><p>﹂ Windows Server 2003 and latest Virtual Machines Architectures</p></li>
      </ul>
    ),
    number: '02',
  },
  {
    id: 3,
    title: 'Virtual Machines Architectures',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ x86</p></li>
        <li className={listItemStyle}><p>﹂ Arm64 (AWS Graviton as an example)</p></li>
      </ul>
    ),
    number: '03',
  },
  {
    id: 4,
    title: 'Containers',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Docker (multi-platform build)</p></li>
      </ul>
    ),
    number: '04',
  },
  {
    id: 5,
    title: 'Configuration Management Tools',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Ansible</p></li>
      </ul>
    ),
    number: '05',
  },
  {
    id: 6,
    title: 'Container Orchestration',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ AWS ECS</p></li>
        <li className={listItemStyle}>
          <p>
            ﹂ Kubernetes (on-premise, AWS EKS, Azure AKS, Tencent Kubernetes
            engine, Google Kubernetes engine) Openshift
          </p>
        </li>
        <li className={listItemStyle}><p>﹂ Openshift</p></li>
        <li className={listItemStyle}><p>﹂ Docker Swarm</p></li>
      </ul>
    ),
    number: '06',
  },
  {
    id: 7,
    title: 'Infrastructure Provisioning (IaC)',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Hashicorp Terraform</p></li>
        <li className={listItemStyle}><p>﹂ Hashicorp Vagrant</p></li>
        <li className={listItemStyle}><p>﹂ AWS CloudFormation</p></li>
      </ul>
    ),
    number: '07',
  },
  {
    id: 8,
    title: 'CI/CD Tool',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ GitLab CI</p></li>
        <li className={listItemStyle}><p>﹂ Jenkins (pipeline developing based on groovy)</p></li>
        <li className={listItemStyle}><p>﹂ GitHub Actions</p></li>
        <li className={listItemStyle}><p>﹂ Bitbucket Pipelines</p></li>
        <li className={listItemStyle}><p>﹂ Travis CI</p></li>
        <li className={listItemStyle}><p>﹂ Circle CI</p></li>
        <li className={listItemStyle}><p>﹂ AWS Pipeline</p></li>
      </ul>
    ),
    number: '08',
  },
  {
    id: 9,
    title: 'Monitoring Tool',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Prometheus</p></li>
        <li className={listItemStyle}><p>﹂ Grafana</p></li>
        <li className={listItemStyle}><p>﹂ Zabbix</p></li>
        <li className={listItemStyle}><p>﹂ Newrelic</p></li>
        <li className={listItemStyle}><p>﹂ CloudWatch</p></li>
      </ul>
    ),
    number: '09',
  },
  {
    id: 10,
    title: 'Programming Language',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Bash</p></li>
        <li className={listItemStyle}><p>﹂ Python</p></li>
      </ul>
    ),
    number: '10',
  },
  {
    id: 11,
    title: 'Web Server',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ Nginx</p></li>
        <li className={listItemStyle}><p>﹂ Apache</p></li>
        <li className={listItemStyle}><p>﹂ Tomcat</p></li>
      </ul>
    ),
    number: '11',
  },
  {
    id: 12,
    title: 'Databases',
    text: (
      <ul>
        <li className={listItemStyle}><p>﹂ PostgreSQL</p></li>
        <li className={listItemStyle}><p>﹂ MySql</p></li>
        <li className={listItemStyle}><p>﹂ MongoDB</p></li>
      </ul>
    ),
    number: '12',
  },
];

export default devopsSolutionsInfiniteDragSliderdata;
